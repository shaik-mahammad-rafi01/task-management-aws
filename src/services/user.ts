import { sendEmail } from "../../config/aws_sns_config";
import { User } from "../../models/User";


export const getUsers = async () => {
    return User.findAll();
}

export const createNewUser = async (name: string, email: string) => {
    try {
        const newUser = await User.create({ name, email });
        await newUser.save();
        if (newUser) {
            try {
                await sendEmail(await newUser.get());
            } catch (Error) {
                console.error(Error, "User saved, but SNS failed:",);
            }
            return newUser;
        }
        return false;
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};