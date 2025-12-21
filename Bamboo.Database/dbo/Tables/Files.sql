CREATE TABLE [dbo].[Files] (
    [Id]     INT IDENTITY (1, 1) NOT NULL,
    [Name]   NVARCHAR(MAX) NOT NULL,
    [RefCode] UNIQUEIDENTIFIER NOT NULL,
    [CreateDate] DATETIME     NOT NULL,
    [CreateBy] INT NOT NULL,
    [IsActive] BIT NOT NULL,
    [FolderId]   INT          NOT NULL,
    CONSTRAINT [PK_Files] PRIMARY KEY CLUSTERED ([Id] ASC)
);

