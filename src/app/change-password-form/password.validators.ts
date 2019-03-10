import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static isWrong(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.value !== '1234')
                resolve({ wrong: true });
            else
                resolve(null);
        });
    }

    static matchPasswords(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return {match: true}
    }
}