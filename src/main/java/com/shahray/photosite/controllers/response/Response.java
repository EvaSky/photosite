package com.shahray.photosite.controllers.response;

public class Response<T> {

    private static final String STATUS_ERROR = "error";
    private static final String STATUS_SUCCESS = "success";

    private ResponseHeader header = new ResponseHeader();
    private T content;

    public static Response ok(){
        Response r = new Response();
        r.getHeader().setTransactionStatus(STATUS_SUCCESS);
        return r;
    }

    public static Response error() {
        Response r = new Response();
        r.getHeader().setTransactionStatus(STATUS_ERROR);
        return r;
    }

    public Response(T content) {
        this.header.setTransactionStatus(STATUS_SUCCESS);
        this.content = content;
    }

    public Response() {
    }

    public T getContent() {
        return content;
    }

    public void setContent(T content) {
        this.content = content;
    }

    public ResponseHeader getHeader() {
        return header;
    }

    public void setHeader(ResponseHeader header) {
        this.header = header;
    }

}
