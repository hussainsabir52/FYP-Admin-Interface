import axios from "axios"

const getUsers = async () => {
    const api_url = "https://conveygo-microservice.herokuapp.com/v1/users";
    try{
        const results = await axios.get(api_url);
        return results.data;
    }
    catch(error){
        console.log(error);
    }
}

export default getUsers;