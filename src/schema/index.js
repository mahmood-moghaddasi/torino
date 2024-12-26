import { date, number, object, string } from "yup";

const passengerSchema = object({
  fullName: string().required("نام و نام خانوادگی را وارد کنید"),
  nationalCode: number()
    .positive("کد ملی را  به درستی وارد کنید")
    .integer("کد ملی را  به درستی وارد کنید")
    .required("کد ملی را  به درستی وارد کنید"),
  gender: string().required("جنسیت خود را وارد کنید"),
});
export { passengerSchema };
