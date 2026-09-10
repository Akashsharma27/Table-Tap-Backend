const ApiResponse = require("../utils/ApiResponse");

exports.success = (

    res,

    message,

    data,

    status = 200

) => {

    return res

        .status(status)

        .json(

            new ApiResponse(

                status,

                message,

                data

            )

        )

}