import {HookReturnValue} from '../types/interfaces/Hook.interface'
import {FormField} from "../FormField";

export const useLength = (minLength: number, maxLength: number): HookReturnValue => {
  const ERROR_NAME = 'length'

  return {
    validators: {
      checkLength(field: FormField) {
        const thisValue = field.getValue() as string
        
        const isValid = (thisValue.length >= minLength && thisValue.length <= maxLength)

        if (!field.errors.includes(ERROR_NAME) && !isValid) field.errors.push(ERROR_NAME)
        if (field.errors.includes(ERROR_NAME) && isValid) field.errors.splice(field.errors.indexOf(ERROR_NAME), 1)
      }
    },
    errorMessages: {
      [ERROR_NAME]: {
        en: `This field must be between ${minLength} and ${maxLength} characters long`,
        de: `Dieses Feld muss zwischen ${minLength} und ${maxLength} Zeichen lang sein`,
        sv: `Detta fält måste vara mellan ${minLength} och ${maxLength} tecken långt`,
        fr: `Ce champ doit comporter entre ${minLength} et ${maxLength} caractères`,
        es: `Este campo debe tener entre ${minLength} y ${maxLength} caracteres`,
        it: `Questo campo deve contenere tra ${minLength} e ${maxLength} caratteri`,
        pt: `Este campo deve ter entre ${minLength} e ${maxLength} caracteres`,
        nl: `Dit veld moet tussen ${minLength} en ${maxLength} tekens lang zijn`,
        pl: `To pole musi mieć od ${minLength} do ${maxLength} znaków`,
        ru: `Это поле должно содержать от ${minLength} до ${maxLength} символов`,
        ja: `このフィールドは${minLength}〜${maxLength}文字でなければなりません`,
        zh: `此字段必须介于${minLength}和${maxLength}个字符之间`,
        ko: `이 필드는 ${minLength}에서 ${maxLength} 사이의 문자여야합니다`,
        ar: `يجب أن يكون هذا الحقل بين ${minLength} و ${maxLength} حرفًا`,
        hi: `यह फ़ील्ड ${minLength} और ${maxLength} वर्णों के बीच होना चाहिए`,
        tr: `Bu alan ${minLength} ve ${maxLength} karakter arasında olmalıdır`,
        cs: `Toto pole musí mít mezi ${minLength} a ${maxLength} znaky`,
        da: `Dette felt skal være mellem ${minLength} og ${maxLength} tegn langt`,
        no: `Dette feltet må være mellom ${minLength} og ${maxLength} tegn`,
        id: `Bidang ini harus antara ${minLength} dan ${maxLength} karakter`,
        hu: `Ez a mező ${minLength} és ${maxLength} karakter között kell legyen`,
        vi: `Trường này phải nằm giữa ${minLength} và ${maxLength} ký tự`,
        th: `ฟิลด์นี้ต้องอยู่ระหว่าง ${minLength} และ ${maxLength} ตัวอักษร`,
        el: `Το πεδίο αυτό πρέπει να είναι μεταξύ ${minLength} και ${maxLength} χαρακτήρων`,
        bg: `Това поле трябва да е между ${minLength} и ${maxLength} символа`,
        et: `See väli peab olema ${minLength} ja ${maxLength} märgi vahel`,
        fa: `این فیلد باید بین ${minLength} و ${maxLength} کاراکتر باشد`,
        he: `שדה זה חייב להיות בין ${minLength} ל ${maxLength} תווים`,
      }
    }
  }
}