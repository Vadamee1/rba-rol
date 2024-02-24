-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "second_name" VARCHAR(25),
    "last_name" VARCHAR(25) NOT NULL,
    "nickname" VARCHAR(25),
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section_rba" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "section_rba_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accordion_rba" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(25) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "section_rba_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "accordion_rba_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "color" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "key" VARCHAR(25) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "section_rba" ADD CONSTRAINT "section_rba_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accordion_rba" ADD CONSTRAINT "accordion_rba_section_rba_id_fkey" FOREIGN KEY ("section_rba_id") REFERENCES "section_rba"("id") ON DELETE CASCADE ON UPDATE CASCADE;
