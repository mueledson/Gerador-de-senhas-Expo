import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    // Buscar os itens salvos
    const getItem = async (key) => {
        try {
            const password = await AsyncStorage.getItem(key)
            return JSON.parse(password) || []

        } catch (err) {
            console.log("Erro ao buscar: " + err);
            return []
        }
    }


    //Salvar um item no Storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key)

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
            

        } catch (err) {
            console.log("ERRO AO SALVAR, " + err);
        }
    }

    //Remove um item no Storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key)

            let myPasswords = passwords.filter((password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords

        } catch (err) {
            console.log("ERRO AO DELETAR, " + err);
        }
    }


    return{
        getItem,
        saveItem,
        removeItem,
    }

}


export default useStorage