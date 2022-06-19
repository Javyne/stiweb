export const dataReparaciones = (id) =>{

    let data = [
        {id:1, equipo:"TV LCD", marca:"Samsung", modelo:"S20", fecha:"2020-01-01", estado:"Reparado"}, 
        {id:1, equipo:"TV LCD", marca:"LG", modelo:"LG21215", fecha:"2020-20-01", estado:"Pendiente"}, 
        {id:2, equipo:"TV LCD", marca:"Samsung", modelo:"S20", fecha:"2020-01-01", estado:"Reparado"}
    ]

    return data.filter(item => item.id === id)
}