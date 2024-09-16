export type UserLogin = {
    username: string,
    password: string
};

export type UserLoginResponse = {
    status: string,
    message?: string,
    authUser?: authUser,
    token?: string
}

type authUser = {
    id: number,
    password: string,
    username: string
}