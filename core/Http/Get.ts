import Axios from 'axios'

export const Get = () => {
    const AxiosGet = async () => {
        let res = await Axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2',
            headers: {
                "Content-Type": "application/json",
            }
        }).then((succ) => {
            console.log("succ data ", succ)
            return succ.data
        }).catch((err) => {
            return err.response
        })
        return res
    }
    return {
        AxiosGet
    }
}
