import {text, pgTable, uuid, timestamp, uniqueIndex,} from "drizzle-orm/pg-core";
export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId:text("clerk_id").unique().notNull(),
    name:text("name").notNull(),
    //TODO : add bunner fields
    imageUrl:text("image_url").notNull(),
    created_at:timestamp("created_at").defaultNow().notNull(),
    updated_at:timestamp("updated_at").defaultNow().notNull(),
},(t)=>[uniqueIndex("clerk_id_idx").on(t.clerkId)]);