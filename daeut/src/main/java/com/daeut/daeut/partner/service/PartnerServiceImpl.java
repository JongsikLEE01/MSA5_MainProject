package com.daeut.daeut.partner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daeut.daeut.auth.dto.Users;
import com.daeut.daeut.auth.mapper.UserMapper;
import com.daeut.daeut.partner.dto.Partner;
import com.daeut.daeut.partner.dto.Review;
import com.daeut.daeut.partner.mapper.PartnerMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class PartnerServiceImpl implements PartnerService {

    @Autowired
    private PartnerMapper partnerMapper;

    @Autowired
    private UserMapper userMapper;

    public PartnerServiceImpl(PartnerMapper partnerMapper) {
        this.partnerMapper = partnerMapper;
    }

    // 파트너 정보 가져오기
    @Override
    public Partner getPartners(int userNo) throws Exception {
        try {
            Partner partner = partnerMapper.getPartners(userNo);
            return partner;
        } catch (Exception e) {
            // 에러 로그 기록
            log.error("Error while fetching partners for userNo: {}", userNo, e);
            throw e;
        }
    }

    // 파트너 정보 수정
    @Override
    @Transactional
    public int partnerUpdate(Partner partner, Users user) throws Exception {
        int partnerUpdateResult = partnerMapper.partnerUpdate(partner);
        int userUpdateResult = userMapper.update(user);
        
        if (partnerUpdateResult <= 0 || userUpdateResult <= 0) {
            throw new Exception("Partner or user update failed");
        }
    }

    // 리뷰 모아보기
    @Override
    public List<Review> getReviews(int partnerNo) throws Exception {
        return partnerMapper.getReviews(partnerNo);
    }

    @Override
    public Partner findByUserNo(int userNo) throws Exception {
        return partnerMapper.findByUserNo(userNo);
    }

    @Override
    public Partner selectByPartnerNo(int parterNo) throws Exception {
        return partnerMapper.selectByPartnerNo(parterNo);
    }
    
    
}
