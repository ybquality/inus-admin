//类型匹配
export interface registerType {
    email: string;
    user_name?: string;
    password: string;
    password2?: string;
}

//注册表单校验规则类型匹配
export interface registerRulesType {
    email: {
        required: boolean;
        type: string;
        message: string;
        trigger: string;
    }[];
    user_name?: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password2?: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    } | {
        validator: (rule: any, value: string, callback: any) => void,
        trigger: string
    })[];
}

//用户类型匹配
export interface userType {
    avatar:string;
    email:string;
    exp:number;
    iat:number;
    id:any;
    is_admin:boolean;
    user_name:string;


}