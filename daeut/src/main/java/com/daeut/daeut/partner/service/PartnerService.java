package com.daeut.daeut.partner.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.daeut.daeut.partner.dto.Partner;
import com.daeut.daeut.partner.dto.Review;

@Service
public interface PartnerService {
   // 파트너 조회
   public Partner getPartners(int userNo) throws Exception;

   // 파트너 수정
   public int partnerUpdate(Partner partner) throws Exception;

   // 사용자가 작성한 리뷰 모아보기
   List<Review> getReviews(int partnerNo) throws Exception;

   // 파트너 조회
   public Partner findByUserNo(int userNo) throws Exception;

   // 파트너 번호로 파트너 조회
   public Partner selectByPartnerNo(int parterNo) throws Exception;
}
