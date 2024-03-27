# openapi_client.DefaultApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_by_id**](DefaultApi.md#delete_by_id) | **DELETE** /users/{userId} | Delete an existing user by ID
[**find_all**](DefaultApi.md#find_all) | **GET** /users | Find all existing users
[**find_by_id**](DefaultApi.md#find_by_id) | **GET** /users/{userId} | Find an existing user by ID
[**save_by_id**](DefaultApi.md#save_by_id) | **PUT** /users/{userId} | Update an existing user by ID
[**save_new**](DefaultApi.md#save_new) | **POST** /users | Create a new user


# **delete_by_id**
> delete_by_id(user_id)

Delete an existing user by ID

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Delete an existing user by ID
        api_instance.delete_by_id(user_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User deleted. Response: &#x60;&lt;none&gt;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_all**
> List[User] find_all()

Find all existing users

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Find all existing users
        api_response = api_instance.find_all()
        print("The response of DefaultApi->find_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->find_all: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Users found. Response: &#x60;List&lt;User&gt;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_by_id**
> User find_by_id(user_id)

Find an existing user by ID

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Find an existing user by ID
        api_response = api_instance.find_by_id(user_id)
        print("The response of DefaultApi->find_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->find_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User found. Response: &#x60;User&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_by_id**
> User save_by_id(user_id, update_user)

Update an existing user by ID

### Example


```python
import openapi_client
from openapi_client.models.update_user import UpdateUser
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    user_id = 'user_id_example' # str | 
    update_user = openapi_client.UpdateUser() # UpdateUser | 

    try:
        # Update an existing user by ID
        api_response = api_instance.save_by_id(user_id, update_user)
        print("The response of DefaultApi->save_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->save_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **update_user** | [**UpdateUser**](UpdateUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User updated. Response: &#x60;User&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_new**
> User save_new(new_user)

Create a new user

### Example


```python
import openapi_client
from openapi_client.models.new_user import NewUser
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    new_user = openapi_client.NewUser() # NewUser | 

    try:
        # Create a new user
        api_response = api_instance.save_new(new_user)
        print("The response of DefaultApi->save_new:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->save_new: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_user** | [**NewUser**](NewUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User created. Response: &#x60;User&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

