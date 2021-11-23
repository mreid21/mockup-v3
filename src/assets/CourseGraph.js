export default class CourseGraph {
    constructor(){
        this.graph = new Map()
    }

    addVertex(v){
        if(!this.graph.get(v)) this.graph.set(v, [])
    }

    addDirectedEdge(source, dest){
        this.graph.get(source).push(dest)
    }

    constructGraph(data){
        const vertices = Array.from(data.keys())
        
        vertices.forEach(vertex => this.addVertex(vertex))

        for(let v of vertices){
            const neighbors = data.get(v).prereqs

            neighbors.forEach(neighbor => {
                this.addDirectedEdge(v, neighbor)
            })
        }
    }
    
    display(){
        this.graph.forEach((edge, vertex) => {
            console.log(`v: ${vertex} u: ${edge}`)
        })
    }
}

