function filterJobsB(request, softDelete=false){

    const findQuery={};

    const findSort={};
   
    request.creator? findQuery['creator']=request.creator:'';

    request.title? findQuery['title']='/'+request.title+'/':'';

    request.type? findQuery['type']=request.type:'';

    request.location? findQuery['location']=request.location:'';

    softDelete? findQuery['isDeleted']=false:'';

    if(request.minPrice && request.maxPrice==null){
        findQuery['price']={'$gte':request.minPrice};
    }

    if(request.maxPrice  && request.minPrice==null){
        findQuery['price']={'$lte':request.minPrice};
    }

    if(request.minPrice && request.maxPrice){
        findQuery['price']={'$gte':request.minPrice,'$lte':request.maxPrice};
    }

    if(request.tags){
        findQuery['tags']={'$in':request.tags};
    }

    if(request.categories){
        findQuery['categories']={'$in':request.categories};
    }

    return {findQuery,findSort}
}

module.exports= {filterJobsB};
