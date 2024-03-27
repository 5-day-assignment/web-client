# NewUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**username** | **str** |  | 
**given_name** | **str** |  | 
**family_name** | **str** |  | 
**address** | **str** |  | 
**password** | **str** | The password (will be hashed before storage). | 

## Example

```python
from openapi_client.models.new_user import NewUser

# TODO update the JSON string below
json = "{}"
# create an instance of NewUser from a JSON string
new_user_instance = NewUser.from_json(json)
# print the JSON string representation of the object
print(NewUser.to_json())

# convert the object into a dict
new_user_dict = new_user_instance.to_dict()
# create an instance of NewUser from a dict
new_user_form_dict = new_user.from_dict(new_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


