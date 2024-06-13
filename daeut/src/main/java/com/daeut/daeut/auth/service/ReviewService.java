package com.daeut.daeut.auth.service;

import com.daeut.daeut.auth.dto.Review;
import com.daeut.daeut.main.dto.Files;
import com.daeut.daeut.reservation.dto.Payments;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

@Service
public interface ReviewService {

    public List<Payments> getUserPayments(int userNo);

    public Payments getPaymentDetails(int paymentNo);
    
    public void saveReview(Review review) throws Exception;

    public List<Review> getReviewByServiceNo(int serviceNo);

    public int getAverageRatingByServiceNo(@Param("serviceNo") int serviceNo);

    public int reviewDelete(int userNo)throws Exception;

    public Review updateReview(Review review);

}
