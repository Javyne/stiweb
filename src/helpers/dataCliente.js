export const dataCliente = (id, pass) =>{

    let clientes = [
        {id:1, pass:"123456"},
        {id:2, pass:"aaaaaa"},
        {id:3, pass:"bbbbbb"},
        {id:4, pass:"987654"}, ]

    return (clientes.find(cliente => cliente.id === id && cliente.pass === pass) !== undefined)
}