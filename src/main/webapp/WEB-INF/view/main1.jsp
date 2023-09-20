<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2023-09-14
  Time: 오전 8:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<ul>
  <c:forEach var="num" items="${[10,20,30,40]}">
    <li>${num}</li>
  </c:forEach>
</ul>
</body>
</html>
