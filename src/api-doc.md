
## HTTP Methods
 
 1.- GET
     Description:
     The client sends a GET request to ask for a representation of a resource, identified by a URL.

     Status Code:
     The most common response code to a GET request is 200(ok). Redirect codes like 301 (Moved Permanently)
     are also commom.

 2.- DELETE
     Description:
     The client sends a DELETE request when it wants a resource to go away. The client wants the server
     to destroy the resource and never refer to it again.

     Status Code:
     If a DELETE request succeeds, the possible status code are:
     1.- 200 Ok
         It's deleted, and here is a message about that
     2.- 204 No Content
         It's deleted, and I don't have anything more to say about it
     3.- 202 Accepted
         I will delete it later
