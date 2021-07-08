function filterJobsB(req, softDelete=false){
    const request = req.query;

    const findQuery={};

    const findSort={};
   
    // query
    request.creator? findQuery['creator']=request.creator:'';

    request.title? findQuery['title']='/'+request.title+'/':'';

    request.type? findQuery['type']=request.type:'';

    request.location? findQuery['location']=request.location:'';

    request.category? findQuery['category']=request.category:'';

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

    //sort

    request.sortTimeAsc ? findSort['createdAt']=1:'';

    request.sortTimeDec ? findSort['createdAt']=-1:'';

    return {findQuery,findSort}
}

module.exports= {filterJobsB};
