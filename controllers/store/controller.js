const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const operationhour = require("../../models/operationhour");

exports._getAll = async (params) => {
    try {
        const store = await model.Store.findAll({
          attributes: ["id", "storeName", "phone", "address", "storePicture", "mapLink"],
          include: [{
            model: model.OperationHour,
            attributes: ["days", "open", "close", "isClosed", "isOpen24Hours"],
            as: "operationHour",
            through: {
              attributes: [],
            },
          },
          {
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
            result: store
        }
    } catch (error) {
        return {
            status: 500,
            message: error.message,
        };
    }
}

exports._create = async (params) => {
  try {
    const { dataStore, dataOperation } = params

    const store = await model.Store.create(dataStore)
    const operations = await model.OperationHour.bulkCreate(dataOperation)

    if(!store || !operations) {
      return {
        status: 400,
        message: "error create"
      }
    }

    const dataForDetail = operations.map(el => {
      return {
        storeId: store.id,
        operationHourId: el.id
      }
    })

    const createDetail = await model.StoreDetail.bulkCreate(dataForDetail)


    return {
        status: 200,
        result: createDetail
    }
  } catch (err) {
    return {
      status: 500,
      message: error.message,
    };
  }
}