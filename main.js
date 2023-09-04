class ProductManager{
    constructor(){
        this.products=[]
    }
    addProduct(title,description,price,thumbnail,code,stock) {
        const camposCompletos = True;

        campos = [title,description,price,thumbnail,code,stock]

        campos.forEach(function(elemento) {
            if (elemento === null){
                camposCompletos = False
            }
        });

        if (!camposCompletos){
            return 'Campos incompletos'
        }

        const ExisteProducto = this.#existeCodigo(code)
        if (ExisteProducto) {
            return'Este codigo ya existe'
        }

        const idNuevo = this.#generaId()

        /*
        const nuevoProducto={
            ...evento,
            lugar: nuevoLugar,
            fecha: nuevaFecha,
            participantes:[],
            id: this.#generarIdEvento()
        }
        this.eventos.push(nuevoEvento)
        */
    }

    #existeCodigo(code){
        return this.products.find(e=>e.code===code)
    }

    #generaId(){
        return this.products.length ? this.products[this.products.length-1].id + 1 : 1
    }



        
    
}