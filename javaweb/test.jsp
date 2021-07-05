<%@ page language="java" contentType="text/html; charset=UTF-8"pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%String str ="12";int number=Integer.parseInt(str);%>
<%=number*number%>
<a href="NewFile1.jsp?number=<%=number*number %>">到达f2</a>
</body>
</html>