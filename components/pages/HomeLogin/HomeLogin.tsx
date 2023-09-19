import { FC } from "react";
import TemplateHomeIn from '@/components/templates/TemplateHomeIn/TemplateHomeIn';
import CardLogin from "@/components/ui/organisms/CardLogin/CardLogin";
import { messageErrors } from "@/lib/types";

interface LoginType {
    email: string;
    password: string;
}

interface Props {
    LoginUser: (data: LoginType) => void;
    messageAmbos: String;
    messageEmail: String;
}

const HomeLogin: FC<Props> = ({LoginUser,messageAmbos,messageEmail}): JSX.Element => {
    return (
        <TemplateHomeIn>
            <CardLogin LoginUser={LoginUser} messageAmbos={messageAmbos} messageEmail={messageEmail}/>
        </TemplateHomeIn>
    );
};

export default HomeLogin;