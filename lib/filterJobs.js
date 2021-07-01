//request = req.body
function filterJobs(request, softDelete=false){
    let querie=`{`;
    let check=false;

    if(request.creator){
        check=true;
        querie+=`"creator": "${request.creator}" ,`
    }

    if(request.title){
        check=true;
        querie+=`"title": "/${request.title}/" ,`
    }

    if(request.type){
        check=true;
        querie+=`"type": "${request.type}" ,`
    }

    if(request.minPrice && request.maxPrice==null){
        check=true;
        querie+=`"price": {"`+'$'+`gte": "${request.minPrice}"} ,`
    }

    if(request.maxPrice  && request.minPrice==null){
        check=true;
        querie+=`"price": {"`+'$'+`lte": "${request.maxPrice}"} ,`
    }

    if(request.minPrice && request.maxPrice){
        check=true;
        querie+=`"price": {"`+'$'+`gte": "${request.minPrice}","`+'$'+`lte": "${request.maxPrice}"} ,`
    }

    if(request.category){
        check=true;
        querie+=`"category": "${request.category}" ,`
    }

    if(request.location){
        check=true;
        querie+=`"location": "${request.location}" ,`
    }

    if(request.tags){
        check=true;
        let tagsQuerie=request.tags.reduce((acc,val)=>acc+`"${val}", `,'').slice(0, -2);
        querie+=`"tags": {"`+'$'+`in": [${tagsQuerie}]} ,`;
    }

    if(softDelete){
        check=true;
        querie+=`"isDeleted": false ,`;
    }

    if(check){
       querie=querie.slice(0,-2); 
    }
    

    querie+=`}`;

    return JSON.parse(querie);
}

module.export=filterJobs;

//testing
console.log(filterJobs({
    title:'nesto',
    type: 'job',
    minPrice: 20,
    maxPrice: 30,
    category: 'casovi',
    location: 'Beograd',
    tags: ['tag1']
},true))
