package com.access_aid.server.components;

import java.util.ArrayList;
import java.util.List;

public class Intergizer {

    public static int intergeiser(ArrayList<Integer> list) {
        int sum = 0;
        for (int i: list) {
            sum += i;
        }
        return sum;
    }
}
