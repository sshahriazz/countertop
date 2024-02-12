-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MANAGER', 'TEMPLATER', 'DRAFTER', 'SLAB_LAYOUT', 'SAW_OPERATOR', 'CNC_OPERATOR', 'FABRICATOR', 'INSTALLER', 'MATERIAL', 'DEALER', 'ACCOUNTING', 'CUSTOMIZE', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "first_name" TEXT DEFAULT '',
    "last_name" TEXT DEFAULT '',
    "password" TEXT NOT NULL,
    "role" "Role"[] DEFAULT ARRAY['USER']::"Role"[],
    "address" TEXT,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "is2fa" BOOLEAN NOT NULL DEFAULT false,
    "disable_access" BOOLEAN NOT NULL DEFAULT false,
    "otp_secret" TEXT,
    "avatar" TEXT DEFAULT '',
    "Per_hour" INTEGER DEFAULT 0,
    "monthly_salary" INTEGER DEFAULT 0,
    "use_Pay_clock" BOOLEAN DEFAULT false,
    "work_start" TEXT DEFAULT '',
    "work_end" TEXT DEFAULT '',
    "show_in_kiosk" TEXT DEFAULT '',
    "hire_date" TIMESTAMP(3),
    "terminate_date" TIMESTAMP(3),
    "rating" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
