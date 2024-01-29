-- CreateTable
CREATE TABLE "Images" (
    "image_id" SERIAL NOT NULL,
    "image_name" TEXT NOT NULL,
    "stored" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "examAtribuiton" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "diagnosis" (
    "id_diagnosis" SERIAL NOT NULL,
    "author_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "pacient" TEXT NOT NULL,

    CONSTRAINT "diagnosis_pkey" PRIMARY KEY ("id_diagnosis")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_examAtribuiton_fkey" FOREIGN KEY ("examAtribuiton") REFERENCES "diagnosis"("id_diagnosis") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diagnosis" ADD CONSTRAINT "diagnosis_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
