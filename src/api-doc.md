
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
    
     If a client tries to GET a resource that has been DELETED, the server will return an error response
     code, usually 404 (Not Found) or 410 (Gone)

     Example:

     Request
     GET /api/47yj HTTP/1.1
     Host: www.nonap.com
     
     Response
     HTTP/1.1 404 Not Found

     Idempotence
     DELETED is not a safe method. It has another useful property: it's idempotent
     Once you delete a resource, it's gone. The resource STATE has PERMANENTLY CHANGED.
     You can send another DELETE request, and you might get a 404 error, but the resource
     state is exactly as it was after the first request. The resource is still gone.
     That's idempotence. Sending a request twice has the same effect on resource state as
     sending it once.

 3.- POST
     When a client sends a POST-to-append request, it sends a represenation of the resource it wants to create
     in the request's entity-body.
     The POST method is neither safe nor idempotent.
     You can use POST method to all sorts of things other than 'creat a new resource'

     Status Code:
     1.- 201 Created
         It lets the client know that a new resource was created. The Location header lets the client know
         the URL to this new resource.
     2.- 202 Accepted
         Which means that the server intends to create a new resource based on the given representation,
         but hasn't actually created it yet.
 4.- PUT
     A PUT request is a request to modify resource state. The client takes the representation it got
     from a GET request, modifies it, and sends it back as the payload of a PUT request.
     If the server decides to accept a PUT request, the server changes the resource state to match
     the client says in the representation.

     Status Code:
     1.- 200 Ok
     2.- 204 No Content

     PUT is idempotent, just like DELETE. If you send the same PUT request 10 times, the result is the
     same as if you'd only sent it  once.

5.- PATCH
    Instead of PUTting a full representation, you can create s special 'diff' representation and send it
    to the server as the payload of a PATCH request. RFC 6902 describes a patch format for JSON documents.

    Status Code:
    1.- 200 Ok
        If the server wants to send data (such as an updated representation of the resource) along with its response.
    2.- 204 No Content
        If the server just wants to indicate success.

    PATCH is neither safe nor idempotent. A PATCH request might turn out to be idempotent, so that if
    you accidentally apply the same patch twice to the same document, you get an error the second time.

    PATCH is not defined in the HTTP specification.

6.- HEAD
    It is a safe method, just like GET. The server is supposed to treat a HEAD request exactly the same as
    a GET request, but it's not supposed to send an entity-body-only the HTTP status code and the headers

7.- OPTIONS
    It is a primitive dicovery mechanism of HTTP. The response to an OPTIONS request contains the HTTP Allow
    header, which lays out wich HTTP methods the resource supports.
    Example:

    OPTIONS /api/dfkjdjf32 HTTP/1.1
    Host: www.nonap.com

    200 OK
    Allow: GET PUT POST OPTIONS

    OPTIONS is a good idea, but almost nobody uses it.


