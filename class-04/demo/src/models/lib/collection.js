class Collection {
    constructor(model) {
        this.model = model;
    }
    async add(obj) {
        let newRecord = await this.model.create(obj);// here i put this instead of Customer(the table) cus there maybe another table(i want to generalize it to all models)
        return newRecord;
    }
    async read(data_id) {
        let records = null;
        if (data_id) {
            records = await this.model.findOne({ where: { id: data_id } });

        } else {
            records = await this.model.findAll();
        }
        return records;
    }
    async update(obj, data_id) {
        let foundCustomer = await this.model.findOne({ where: { id: data_id } });
        let updatedCustomer = await foundCustomer.update(obj);
        return updatedCustomer;
    }
    async delete(data_id) {
        let record = await this.model.destroy({ where: { id: data_id } });
        return record;
    }
    // this works as well
    // async readCustomerOrders(id) {
    //     let record = await this.model.findAll({
    //         where: { customerId: id }
    //     })
    //     return record;
    // }

    async readCustomerOrders(id, model) {
        let record = await this.model.findOne({
            where: { id },
            include: model,
        });
        return record;
    }

}

module.exports = Collection;