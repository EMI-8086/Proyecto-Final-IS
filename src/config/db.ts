import { Sequelize } from "sequelize"

const db = new Sequelize(
    'postgresql://rest_api_node_typescript_x263_user:QZDBcgMeIL2oa87eS5l0hiND8b5bivCL@dpg-d4o0bqur433s73eh4c50-a.oregon-postgres.render.com/rest_api_node_typescript_x263'
)
export default db

