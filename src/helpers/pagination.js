exports.getPagination=(page,limit)=>{

    page=Number(page)||1;

    limit=Number(limit)||10;

    const offset=(page-1)*limit;

    return{

        page,

        limit,

        offset

    }

}