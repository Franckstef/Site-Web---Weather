/* eslint-disable indent */
import { hash } from 'bcrypt';
import { Router, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Authentification } from '../../../common/authentification';
import { UserDTO } from '../../../common/user';
import { User } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { MongodbService } from '../services/mongodb.service';
import { TYPES } from '../types';


@injectable()
export class AuthController{
    public constructor(@inject(TYPES.AuthService) private _authService: AuthService, 
                       @inject(TYPES.MongodbService) private _mongodbService: MongodbService){
    }

    public get router() : Router {
        
        const router: Router = Router();

        // -> /api/v1/auth/loggin
        router.post('/login',async (req:Request, res: Response) => {
            const auth: Authentification = req.body;

            //Trouve l'utilisateur dans la BD, si l'utilisateur est null retournez le code 403
            const user: User | null = await this._mongodbService.getUserByUsername(auth.username);
                if (user === null) {
                    res.status(403).send('Existe pas');
                }

                //Compare le mot de passe de la BD avec le mot de passe de la requête, utiliser le auth.service, retourne le code 403 au besoin
                else {      // Je rajoute un else sinon le serveur plante lorsque l'utilisateur qui se connecte n'existe pas.

                    const hash1 = <string>user.hash;
                    
                    // Compare les 2 mots de passe (le mot de passe chiffré lors de la création, et le password entré) avec la fonction isPasswordValid. Si faux, erreur, sinon on continue.
                    const valide: boolean =  await this._authService.isPasswordValid(auth.password, hash1);
                    
                    if (valide === false) {
                        res.status(403).send('Password non valide');
                    }

                    else {
                        //Génére le jeton de l'utilisateur à l'aide du service auth.service et assigner à l'utilisateur
                        const jeton = this._authService.generateToken(user?._id);

                        //Retourne les informations de l'utilisateur sans le hash (voir interface UserDTO) 
                        const userDTO: UserDTO = <UserDTO>user;
                        userDTO.token = jeton;

                        res.json(userDTO);
                    }    

                }

            });
        
        // -> /api/v1/auth/signup
        router.post('/signup',async (req:Request, res: Response) => {
            const auth: Authentification = req.body;

            //Valide que l'utilisateur (username) n'est pas déjà dans la BD, retounez un code 405 si déjà présent
            let user: User | null = await this._mongodbService.getUserByUsername(auth.username);
                if(user) {
                    res.status(405).send('User existe');
                }

                else {      // Je rajoute un else, sinon le serveur plante et il y a création d'un doublon (même nom, même mot de passe)

                    //Chiffre le mot de passe avec auth.service
                    const hash: string = await this._authService.encryptPassword(auth.password);

                    //Ajoute l'utilisateur à la BD, retounez un code 500 en cas de problème
                    user = await this._mongodbService.createUser(auth.username, hash);
                    if(!user) {
                        res.status(500).send();
                    }
                    else {
                        //Génére le jeton de l'utilisateur à l'aide du service auth.service
                        const jeton = this._authService.generateToken(user?._id);
                    
                        //Retourne les informations de l'utilisateur sans le hash (voir interface UserDTO)
                        const userDTO: UserDTO = <UserDTO>user;
                        userDTO.token = jeton;

                        res.json(userDTO);
                    }
                }

            });
            
            return router;
    }

}