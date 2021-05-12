import mysqldump, { DumpReturn } from "mysqldump";
import * as dotenv from "dotenv";

import { getDate } from "./functions"

dotenv.config();

const fileFormat = (name : string) : string => {
    var ret : string = name;

    if (ret.includes("{date}"))
        ret = ret.replace("{date}", getDate());
    return (ret);
};

const dump = async () : Promise<DumpReturn> => {

    const res : DumpReturn = await mysqldump({
        connection: {
            host: process.env.HOST || "localhost" ,
            port: Number(process.env.PORT) || 3306,
            user: process.env.USER || "root",
            password: process.env.PASS || "",
            database: process.env.DB || "",
        },
        dumpToFile: fileFormat(String(process.env.FILE) || "./dump.sql"),
    });
    return (res);
};

const app = async () : Promise<void> => {
    const res = await dump();
    console.log(res);
};

app();