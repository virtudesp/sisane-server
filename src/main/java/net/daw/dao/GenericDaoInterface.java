package net.daw.dao;

import java.util.ArrayList;
import java.util.HashMap;
import net.daw.helper.FilterBean;

public interface GenericDaoInterface<GenericBeanImplementation> {

    public int getPages(int intRegsPerPag, ArrayList<FilterBean> hmFilter) throws Exception;

    public int getCount(ArrayList<FilterBean> hmFilter) throws Exception;

    public ArrayList<GenericBeanImplementation> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBean> hmFilter, HashMap<String, String> hmOrder) throws Exception;

    public GenericBeanImplementation get(GenericBeanImplementation oBean) throws Exception;

    public GenericBeanImplementation set(GenericBeanImplementation oBean) throws Exception;

    public void remove(GenericBeanImplementation oBean) throws Exception;

    public ArrayList<String> getColumnsNames() throws Exception;
}
