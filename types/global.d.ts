/* eslint-disable no-var */
import type { MongoClient } from 'mongodb'

declare global {
  namespace globalThis {
    var _mongoClientPromise: Promise<MongoClient>
    var mongoose: any;
  }
}