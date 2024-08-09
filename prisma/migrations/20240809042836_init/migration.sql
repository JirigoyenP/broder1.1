-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "vicePresidency" TEXT NOT NULL,
    "ticketNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticketNumber_key" ON "Ticket"("ticketNumber");
