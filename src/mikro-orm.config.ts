import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";
import path from 'path';

console.log("dirname: ", __dirname);
export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'lireddit',
    clientUrl: 'postgresql://postgres:postgres@localhost:5432/lireddit',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];