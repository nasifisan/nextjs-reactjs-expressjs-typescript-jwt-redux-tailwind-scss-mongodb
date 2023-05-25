import jwtDecode from "jwt-decode";
import { TokenValidation } from "../../server/src/users/utility/tokenValidation";
import { User } from "@/models/User";

export interface AuthResponse {
    success: boolean;
    access_token: string;
    refresh_token: string;
    expires_in: number;
};

export interface DecodedToken {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    name: string;
    iat: number;
    exp: number;
    _id: string;
}

export class TokenInfo {
    Name: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    UserId: string;

    constructor(token : string) {
        const decodedToken : DecodedToken = jwtDecode(token ?? '');

        this.Name = decodedToken.name;
        this.Email = decodedToken.email;
        this.LastName = decodedToken.last_name;
        this.FirstName = decodedToken.first_name;
        this.Phone = decodedToken.phone;
        this.UserId = decodedToken._id;
    }

    getUserDetails = () => {
        const details : User  = {
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
            Phone: this.Phone,
            UserId: this.UserId,
            Name: this.Name
        }

        return details;
    }
}