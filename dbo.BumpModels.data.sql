SET IDENTITY_INSERT [dbo].[BumpModels] ON
INSERT INTO [dbo].[BumpModels] ([Timestamp], [Long], [Lat], [X], [Y], [Z], [Magnitude], [Rating]) VALUES (getdate(), 1, 2, 3, 4, 5, 6, N'Low')
INSERT INTO [dbo].[BumpModels] ([Timestamp], [Long], [Lat], [X], [Y], [Z], [Magnitude], [Rating]) VALUES (getdate(), 2, 3, 4, 5, 6, 7, N'Medium')
INSERT INTO [dbo].[BumpModels] ([Timestamp], [Long], [Lat], [X], [Y], [Z], [Magnitude], [Rating]) VALUES (getdate(), 3,4,5,6,7,8,N'High')
SET IDENTITY_INSERT [dbo].[BumpModels] OFF


select * from [dbo].[BumpModels]

truncate table [dbo].[BumpModels]