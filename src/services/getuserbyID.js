import axios from "axios"

const getuserbyID = async (id) => {
    const api_url = "https://conveygo-microservice.herokuapp.com/v1/user/"+id;
    try{
        const results = await axios.get(api_url);
        return results.data;
    }
    catch(error){
        console.log(error);
    }
}

export default getuserbyID;