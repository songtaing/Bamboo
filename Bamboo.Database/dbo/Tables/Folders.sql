CREATE TABLE [dbo].[Folders] (
    [FolderId]   INT IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR(MAX) NOT NULL,
    [RefCode] UNIQUEIDENTIFIER NOT NULL,
    [CreateDate] DATETIME NOT NULL,
    [CreateBy] INT NOT NULL,
    [IsActive] BIT NOT NULL,
    CONSTRAINT [PK_Folders] PRIMARY KEY CLUSTERED ([FolderId] ASC)
);

