
export interface dataUserInteface {
        _id: string,
        amount: number,
        type: string,
        name:  {
            last: string,
            first: string
        },
        company: string,
        email: string,
        phone: string,
        address: string
    }