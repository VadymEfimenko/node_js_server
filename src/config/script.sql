DELETE FROM Courses;

insert into Courses (id, name, createdAt, updatedAt)
values (1, 'w', NOW(), NOW()),
 (2, 'w', NOW(), NOW()),
 (3, 'w', NOW(), NOW()),
 (4, 'w', NOW(), NOW());

DELETE FROM Students;

insert into Students (id, fullName, createdAt, updatedAt)
values (1, 'w', NOW(), NOW()),
 (2, 'w', NOW(), NOW()),
 (3, 'w', NOW(), NOW()),
 (4, 'w', NOW(), NOW());

DELETE FROM CourseStudent;
insert into CourseStudent (createdAt, updatedAt, StudentId, CourseId)
values (NOW(), NOW(), 1,2),
         (NOW(), NOW(), 2,2),
         (NOW(), NOW(), 3,2);
