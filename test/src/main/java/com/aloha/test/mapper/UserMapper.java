package com.aloha.test.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aloha.test.dto.UserAuth;
import com.aloha.test.dto.Users;

@Mapper
public interface UserMapper {

    // 로그인
    public Users login(String username) throws Exception;

    // 아이디 찾기
    public  String findUserByDetails(@Param("userName") String userName, 
                                     @Param("userEmail") String userEmail, 
                                     @Param("userPhone") String userPhone) throws Exception;
                                     
    // 회원 조회
    public Users select(String username) throws Exception;

    // 이메일로 사용자 조회
    public Users findUserByEmail(String userEmail) throws Exception;

    // 회원 가입
    public int join(Users user) throws Exception;

    // 회원 수정
    public int update(Users user) throws Exception;

    // 회원 권한 등록
    public int insertAuth(UserAuth userAuth) throws Exception;

    // 회원 탈퇴
    public int delete(Users user) throws Exception;

}