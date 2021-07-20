const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const operationhour = require("../../models/operationhour");

exports._getProvinceAll = async (params) => {
    try {
        const province = await model.Province.findAll({
          attributes: ["id", "name"],
          include: [{
            model: model.Regency,
            attributes: ["name"],
            as: "regencies"
          }]
        });

        // store.forEach(stores => {
        //   console.log(stores.toJSON());
        // });

        return {
            status: 200,
            result: province
        }
    } catch (error) {
        return {
            status: 500,
            message: error.message,
        };
    }
}