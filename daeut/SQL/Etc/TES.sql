-- Active: 1717813530241@@127.0.0.1@3306@joeun

DELETE FROM cart
WHERE service_no IN (1,2)
  AND user_no = 2
;

DELETE FROM cart
WHERE service_no IN (${serviceNoList})
  AND user_no = #{userNo}
;

SELECT * FROM users;